function openModal(id){
    document.getElementById(id).style.display = "block";
}

function closeModal(el){
    el.style.display = "none";
}

// Trigger modal with button
document.getElementById("more-info").onclick = () => {
    openModal("more-info-modal");
};

// Add event to all close modal elements
const listCloseModals = Array.from(document.getElementsByClassName("close"));
listCloseModals.forEach((el) => {
    el.onclick = () => {closeModal(el.parentElement.parentElement)};
});