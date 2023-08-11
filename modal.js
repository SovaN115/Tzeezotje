export class Modal {
    isOpen = false;

    constructor(buttons, object) {
        this.buttons = [];
        this.object = document.querySelector(object);
        for (let i = 0; i < buttons.length; i++) {
            const element = buttons[i];
            this.buttons.push(document.querySelector(element));
            this.buttons[i].addEventListener('click', () => {
                this.OpenOrClose()
            });
        }
    }

    OpenOrClose() {

        console.log('click')

        if(this.isOpen) {
            this.object.style.display = 'none';
        } else {
            this.object.style.display = 'flex';
        }

        this.isOpen = !this.isOpen
    }
}