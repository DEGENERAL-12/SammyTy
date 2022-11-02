const closeBtn = document.getElementById('close-btn');
const openBtn = document.querySelector('.toggleMenu');
const aside = document.querySelector('.aside');
const darkMode = document.getElementById('darkMode');
const topicons = document.querySelector('.top-icons')

//show sidebar
openBtn.addEventListener('click', () => {
    aside.style.visibility = "visible";
})

//close sidebar
closeBtn.addEventListener('click', () => {
    aside.style.visibility = "hidden"
})

//change theme
darkMode.addEventListener('click', ()=> {
    document.body.classList.toggle('dark-theme-varables')

    topicons.querySelector('span:nth-child(1)').classList.toggle('active');
    topicons.querySelector('span:nth-child(2)').classList.toggle('active');
})  


orders.forEach(order => {
    const tr = document.createElement('tr');
    const trContent = `
            <td>${order.productName}</td>
            <td>${order.productNumber}</td>
            <td class=${order.payment === 
            'paid' ? 'success': order.payment ===
            'due' ? 'warning': 'primary' }> ${order.payment}</td>
            <td class=${order.status ===
             'delivered'?'success' : order.status
            === 'pending'?'warning':'danger'}>${order.status}</td>
            <td class="primary">"Details"</td>
    `;

    tr.innerHTML = trContent;
    document.querySelector('table tbody').appendChild(tr)
})