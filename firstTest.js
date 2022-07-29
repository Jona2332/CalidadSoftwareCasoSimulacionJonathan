const {Builder, By, Key} = require ("selenium-webdriver");

async function example(){

//iniciar el navegador

let driver = await new Builder().forBrowser("firefox").build();

//navegar a nuestra aplicación de escaneo de seguridad.

await driver.get("https://api.hostedscan.com/auth/magiclink/callback?magic=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImVtYWlsIjoiam9uaGFuY2hpYUBnbWFpbC5jb20iLCJyZXR1cm5UbyI6Ii9kYXNoYm9hcmQiLCJ0ZW1wbGF0ZSI6Im1hZ2ljTGlua19zY2Fuc0luUHJvZ3Jlc3MifSwiaWF0IjoxNjU5MTE4MDU3LCJleHAiOjE2NTkyMDQ0NTd9.1hL1cofCHjA-K3zWfNsF0D9rDIvvCkXy7WA1DHYX81A&referer=https%3A%2F%2Fhostedscan.com%2Fdashboard")

//Nuevo escaneo 
//Interacción con el path de escaneo nuevo
await driver.findElement(By.xpath("/html/body/div/div/div[2]/div[1]/div[2]/button")).click();
await driver.findElement(By.id("NMAP")).click();
await driver.findElement(By.id("OPENVAS")).click();
await driver.findElement(By.id("SSLYZE")).click();
await driver.findElement(By.id("OWASP_ZAP_ACTIVE")).click();
await driver.findElement(By.className("TailwindButton")).click();
await driver.findElement(By.xpath("/html/body/div[3]/div/div/div[2]/div/div[1]/div/div/div/div/div/div[2]/div/div[1]/input")).click();
await driver.findElement(By.xpath("/html/body/div[3]/div/div/div[2]/div/div[2]/button[2]")).click();
await driver.findElement(By.xpath("/html/body/div[3]/div/div/div[2]/div/div[2]/button[2]")).click();
//Apertura de reporte de escaneo
await driver.get("https://api.hostedscan.com/scans/results/62e422a88667d20040f7859d");

}
example()