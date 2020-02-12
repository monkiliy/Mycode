module.exports = (buttonName)=>{
    const button = document.createElement('button');
    button.innerHTML = `button:${buttonName}`;
    return button;
}