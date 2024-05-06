var hostname = window.location.host;

function checkIpAddress(hostname) { 
    const ipv4Pattern = /^(\d{1,3}\.){3}\d{1,3}$/; 
    const ipv6Pattern = /^([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}$/; 

    return ipv4Pattern.test(hostname) || ipv6Pattern.test(hostname); 
} 

if (checkIpAddress(hostname) == false) {
  window.location.replace("https://www."+hostname);
}
