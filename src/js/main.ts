const setSelectLng = () => {
    const selectLng: any = document.getElementById('lng-select')

    if (!selectLng) return

    setTimeout(() => {
        selectLng.value = ''
    }, 250)


    selectLng.addEventListener("change", (event: any) => {
        window.open(
            `http://${location.host}/${event.target.value}`,
            "_self"
        );

    })
}

setSelectLng()