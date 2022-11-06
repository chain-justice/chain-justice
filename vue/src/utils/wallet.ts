export const shortenAddress = (addr?: string) =>{ 
    if (!addr) return "";
    if (addr.length < 10) return addr;
    return addr.substring(0, 10) + '...' + addr.slice(-4)
}