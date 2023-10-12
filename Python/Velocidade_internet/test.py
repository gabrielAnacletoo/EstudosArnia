import speedtest

test = speedtest.Speedtest();

# download 
print("testando download...")
velocidade_download = test.download()
print(f"velocide de download: {velocidade_download / 10**6:.2f}")
# upload 
print("testando upload...")
velocidade_upload = test.upload()
print(f"velocidade de upload: {velocidade_upload / 10**6:.2f}")
# ping
print("testando ping...")
ping = test.results.ping
print(f"ping: {ping:.2f}")
