const setSelectLngEn = () => {
    const selectLng: any = document.getElementById('lng-select')

    if (!selectLng) return

    setTimeout(() => {
        selectLng.value = 'en'
    }, 250)


    selectLng.addEventListener("change", (event: any) => {
        window.open(
            `http://${location.host}/${event.target.value}`,
            "_self"
        );

    })
}

setSelectLngEn()