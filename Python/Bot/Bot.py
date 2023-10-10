from selenium import webdriver
from selenium.webdriver.common.keys import Keys
import time

# Caminho pro teu ChromeDriver
chrome_path = 'caminho/do/chromedriver'

# Cria uma instância do navegador
driver = webdriver.Chrome(executable_path=chrome_path)

# Abre o LinkedIn
driver.get('https://www.linkedin.com/')

# Preenche os campos de login
usuario = driver.find_element('name', 'session_key')
usuario.send_keys('SeuUsuarioAqui')

senha = driver.find_element('name', 'session_password')
senha.send_keys('SuaSenhaAqui')

# Simula o Enter pra fazer o login
senha.send_keys(Keys.RETURN)

# Espera um pouco só pra ver o que acontece
time.sleep(5)

# Fecha o navegador
driver.quit()
