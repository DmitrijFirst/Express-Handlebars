document.querySelectorAll('.price').forEach(node => {
    node.textContent = new Intl.NumberFormat('ua-Ua', {
        currency: 'UAH',
        style: 'currency'
    }).format(node.textContent)
})