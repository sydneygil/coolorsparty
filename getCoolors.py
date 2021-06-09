from selenium import webdriver
import json
import os

chrome_options = webdriver.ChromeOptions()
chrome_options.binary_location = os.environ.get("GOOGLE_CHROME_BIN")
chrome_options.add_argument("--headless")
chrome_options.add_argument("--disable-dev-shm-usage")
chrome_options.add_argument("--no-sandbox")
driver = webdriver.Chrome(executable_path=os.environ.get("CHROMEDRIVER_PATH"), chrome_options=chrome_options)

url = 'https://coolors.co/generate'

# chromedriver_location = "./drivers/chromedriver"

def getColors(url):
    #open up coolors
    # driver = webdriver.Chrome(executable_path=os.environ.get("CHROMEDRIVER_PATH"), chrome_options=chrome_options)

    # driver = webdriver.Chrome(chromedriver_location)
    driver.get(url)

    #get rid of ads and pop ups
    exitNotif = '//*[@id="modal-fabrizio"]/div/div[2]/div/a/i'
    addNotif = '//*[@id="whats-new"]/div/div[2]/div/a[1]/i'
    driver.find_element_by_xpath(exitNotif).click()
    driver.find_element_by_xpath(addNotif).click()

    #find colors by their divs
    colors = []
    divs = ['//*[@id="generator_colors"]/div[1]/div[2]/div[1]', '//*[@id="generator_colors"]/div[2]/div[2]/div[1]', '//*[@id="generator_colors"]/div[3]/div[2]/div[1]',
        '//*[@id="generator_colors"]/div[4]/div[2]/div[1]', '//*[@id="generator_colors"]/div[5]/div[2]/div[1]' ]

    for div in divs:
        colors.append(driver.find_element_by_xpath(div).text)
        # print(colors)

    driver.quit()

    print(json.dumps(colors))
    # return colors

getColors(url)
