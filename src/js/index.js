const tabs = document.querySelectorAll('.tab')
tabs.forEach(tab => {
  tab.addEventListener("click", function () {
    if (tab.classList.contains("tab-selecting")) {
      return;
    }
    const tabSelecting = document.querySelector(".tab.tab-selecting")
    tabSelecting.classList.remove("tab-selecting")
    tab.classList.add("tab-selecting")
    const informationSelecting = document.querySelector(".information.tab-selecting")
    informationSelecting.classList.remove("tab-selecting")
    const idElementOfInformationOfTab = `information-${tab.id}`
    const informationToBeShow = document.getElementById(idElementOfInformationOfTab)
    informationToBeShow.classList.add("tab-selecting")
  })
})