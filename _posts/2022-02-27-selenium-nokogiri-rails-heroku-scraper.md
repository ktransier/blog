---
published: true
layout: post
title: Shortest path to a functional webscraper using Selenium + Nokogiri + Rails + Heroku
category: blog
image_url: null
---

1. Create a new Rails 7 application:
 ```
 $ rails new webscraper --database=postgresql
 ```


2. Move the following gems outside of the test group and bundle:
```
gem 'selenium-webdriver'
gem 'webdrivers'
```


3. Run the following to add Linux as a supported platform within your Gemfile.lock, this is necessary to support the Heroku deployment:
```
$ bundle lock --add-platform x86_64-linux
```


4. Add a new file under `./app/scrapers/scraper.rb` with the following code:
```ruby
class Scraper
	def scrape
		require "selenium-webdriver"
		Selenium::WebDriver::Chrome.path = ENV["GOOGLE_CHROME_BIN"] if Rails.env.production?

		arguments = %w[--headless --no-sandbox --disable-gpu]
		options = Selenium::WebDriver::Chrome::Options.new(args: arguments)
		driver = Selenium::WebDriver.for(:chrome, options: options)

		driver.get("https://quotes.toscrape.com/js/")

		doc = Nokogiri::HTML(driver.page_source)
		doc.css('.quote').each do |link|
		  puts link.content
		end

		driver.quit
	end
end
```


5. Next create a rake task under `./lib/tasks/scraper.rb` with the following code:
```ruby
namespace :scraper do
  desc "Scrape"
  task scrape: :environment do
    scraper = Scraper.new
    scraper.scrape
  end
end
```


6. Run `$ rake scraper:scrape` and test that the scraper is functioning locally.


7. Commit your changes:
```
git add -A
git commit -m "initial"
```


8. Next create a new Heroku app and add the following build packs:
```
$ heroku create
$ heroku buildpacks:add --index 1 heroku/ruby
$ heroku buildpacks:add --index 2 heroku/chromedriver
$ heroku buildpacks:add --index 3 heroku/google-chrome
```


9. After deploying, run the following to test that the scraper is functioning in production:
```
heroku run rake scraper:scrape
``` 


10. If running the scraper as a recurring job, set up a new job using Heroku Scheduler: https://devcenter.heroku.com/articles/scheduler

