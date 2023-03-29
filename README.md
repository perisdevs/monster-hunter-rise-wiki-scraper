# monster-hunter-rise-wiki-scraper
Uses a shell script to download pages from Fextralife's Monster Hunter Rise wiki (https://monsterhunterrise.wiki.fextralife.com/Monster+Hunter+Rise+Wiki), and then scrapes the HTML files to create JSON objects based on in-game items.

# How to use 

You can run the downloader script by running `./downloader.sh` in the root folder. This script will use `curl` to download webpages from the wiki. The webpages will be saved as HTML files in `./download_output`.

After the script has finished running, you can run `npm start` in the root folder. The downloaded webpages will then be scraped and JSON files will be written to the disk in `./scrape_output`.

# Weapons

This scraper no longer scrapes weapons from the wiki as they no longer include sharpness. Use the Kiranico Weapon Scraper (https://github.com/perisdevs/kiranico-scraper)