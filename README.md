# ecommerce-data-scrapper
Chrome extension that scrap product data from Amazon, newegg, computerdealsdirect etc 

### Download
`git clone git@github.com:nahidacm/ecommerce-data-scrapper.git`

### Installation
1. Open the Extension Management page by navigating to (chrome://extensions).

 - The Extension Management page can also be opened by clicking on the Chrome menu, 
hovering over **More Tools** then selecting **Extensions**.

2. Enable Developer Mode by clicking the toggle switch next to **Developer mode**.
3. Click the **LOAD UNPACKED** button and select the extension directory.

![load_extension](https://user-images.githubusercontent.com/998551/55450964-d37ad580-55f2-11e9-9d4f-5843bf726481.png)

### User Guide
Visit supported websites' product page.
Then click on the extension icon on the top right browser section.
You should see the extracted conted the extension popup window. 
Click on the contents to Download /  copy them.

### Developer Guide

**To add new site** on `popup.js` file add site name in the `scrapables` array. Then create a js file under `content-scripts` with name `<sitename>-scrapper.js`. this file is responsible to scrap site specific data and feed the data into `popup.js` file. and `popup.js` will take care of rest. `amazon-scrapper.js` can be a good reference.
