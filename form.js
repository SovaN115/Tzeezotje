export class Form {
    constructor(btn, inputs, url) {
        this.btn = document.querySelector(btn);
        this.url = url;
        this.inputs = inputs;

        this.btn.addEventListener("click", () => {
            this.onsubmit()
        })
    }

    async onsubmit() {
        let request = {};

        for (let i = 0; i < this.inputs.length; i++) {
            const element = document.querySelector(this.inputs[i]);
            console.log(element.name)
            request[element.name] = element.value
        }

        let response = await fetch(this.url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(request)
        })

        let result = await response.json();
        console.log(result.message)

        console.log(request)
    }
}