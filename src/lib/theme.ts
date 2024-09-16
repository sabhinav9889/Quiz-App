export function setTheme1(){
    if(localStorage.getItem('theme')==null) localStorage.setItem('theme', 'white');
}

export function toggleTheme(){
    if(localStorage.getItem('theme')=='white') localStorage.setItem('theme', 'dark');
    else localStorage.setItem('theme', 'white');
}