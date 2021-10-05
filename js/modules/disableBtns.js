const disableBtns = (btns) => {
    [...btns].forEach(btn => {
        btn.disabled = true;
        btn.classList.add("disabled");
    });
}

export default disableBtns;