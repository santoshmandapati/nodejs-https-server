# nodejs-https-server

1. Generate a private key using `openssl`

`openssl genrsa -out sandy-key.pem 2048`

```shell
Santoshs-MacBook-Pro:ssl-certificate-samples sandy-mbp$ openssl genrsa -out sandy-key.pem 2048
Generating RSA private key, 2048 bit long modulus
......................................................................+++
...................................................................................................+++
e is 65537 (0x10001)
```

2. Generate a Certificate Signing Request (CSR) file for the private key.

`openssl req -new -sha256 -key sandy-key.pem -out sandy-csr.pem`

```bash
Santoshs-MacBook-Pro:ssl-certificate-samples sandy-mbp$ openssl req -new -sha256 -key sandy-key.pem -out sandy-csr.pem
You are about to be asked to enter information that will be incorporated
into your certificate request.
What you are about to enter is what is called a Distinguished Name or a DN.
There are quite a few fields but you can leave some blank
For some fields there will be a default value,
If you enter '.', the field will be left blank.
-----
Country Name (2 letter code) []:US
State or Province Name (full name) []:
Locality Name (eg, city) []:
Organization Name (eg, company) []:
Organizational Unit Name (eg, section) []:
Common Name (eg, fully qualified host name) []:
Email Address []:

Please enter the following 'extra' attributes
to be sent with your certificate request
A challenge password []:
```

3. Generate a self-signed certificate

`openssl x509 -req -in sandy-csr.pem -signkey sandy-key.pem -out sandy-cert.pem`

```bash
Santoshs-MacBook-Pro:ssl-certificate-samples sandy-mbp$ openssl x509 -req -in sandy-csr.pem -signkey sandy-key.pem -out sandy-cert.pem
Signature ok
subject=/C=US
Getting Private key
```

4. Start the https server `node https-server.js`
