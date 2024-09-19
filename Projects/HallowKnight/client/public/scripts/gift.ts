const renderGift = async () => {
    const requestedID = parseInt((window.location.href || '').split('/').pop() ?? "")
    const response = await fetch('/gifts')
    const data = await response.json()
    const giftContent = document.getElementById('gift-content');

    let gift = data.find((gift) => gift.id === requestedID)

    if (gift) {
        document.getElementById('image').src = gift.image
        document.getElementById('name').textContent = gift.name
        document.getElementById('healthPoint').textContent = 'HealthPoint: ' + gift.healthPoint
        document.getElementById('audience').textContent = 'Great For: ' + gift.audience
        document.getElementById('description').textContent = gift.description
        document.title = `Hallow Knight - ${gift.name}`
    } else {
        const message = document.createElement('h2')
        message.textContent = 'No Knight Available'
        giftContent?.appendChild(message)
    }
};

renderGift()