(function(){
    const $ = (q: string): HTMLElement | null => document.querySelector(q);

    function convertPeriod(mil: number): string {
        const min = Math.floor(mil / 60000);
        const sec = Math.floor((mil % 60000) / 1000);
        return `${min}m e ${sec}s`;
    }

    function calculatePayment(mil: number): number {
        const hours = mil / 3600000; // Converte milissegundos para horas
        const rate = 8; // Valor de R$8,00 por hora
        return hours * rate; // Cálculo proporcional ao tempo estacionado
    }

    interface Car {
        name: string;
        licence: string;
        time: number;
    }

    function renderGarage(): void {
        const garage = getGarage();
        const garageElement = $("#garage");

        if (garageElement) {
            garageElement.innerHTML = "";
            garage.forEach(car => addCarToGarage(car));
        }
    }

    function addCarToGarage(car: Car): void {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${car.name}</td>
            <td>${car.licence}</td>
            <td data-time="${car.time}">
                ${new Date(car.time).toLocaleString('pt-BR', { 
                    hour: 'numeric', minute: 'numeric' 
                })}
            </td>
            <td>
                <button class="delete">x</button>
            </td>
        `;

        const garageElement = $("#garage");
        if (garageElement) {
            garageElement.appendChild(row);
        }
    }

    function checkOut(info: HTMLCollectionOf<HTMLTableDataCellElement>): void {
        const startTime = new Date(parseInt(info[2].dataset.time || "0", 10));
        const currentTime = new Date();
        const periodMs = currentTime.getTime() - startTime.getTime();
        const period = convertPeriod(periodMs);
        const payment = calculatePayment(periodMs);

        const licence = info[1].textContent;
        const vehicleName = info[0].textContent;
        const msg = `O veículo ${vehicleName} de placa ${licence} permaneceu ${period} estacionado. \nTotal a pagar: R$${payment.toFixed(2)}\n\n Deseja encerrar?`;

        if (!confirm(msg)) return;

        const garage = getGarage().filter(car => car.licence !== licence);
        localStorage.garage = JSON.stringify(garage);

        renderGarage();
    }

    function getGarage(): Car[] {
        return localStorage.garage ? JSON.parse(localStorage.garage) : [];
    }

    renderGarage();

    const sendButton = $("#send");
    if (sendButton) {
        sendButton.addEventListener("click", () => {
            const nameInput = $("#name") as HTMLInputElement;
            const licenceInput = $("#licence") as HTMLInputElement;

            const name = nameInput?.value;
            const licence = licenceInput?.value;

            if (!name || !licence) {
                alert("Os campos são obrigatórios.");
                return;
            }

            const car: Car = { name, licence, time: new Date().getTime() };

            const garage = getGarage();
            garage.push(car);

            localStorage.garage = JSON.stringify(garage);

            addCarToGarage(car);

            if (nameInput) nameInput.value = "";
            if (licenceInput) licenceInput.value = "";
        });
    }

    const garageElement = $("#garage");
    if (garageElement) {
        garageElement.addEventListener("click", (e: Event) => {
            const target = e.target as HTMLElement;
            if (target.className === "delete") {
                checkOut((target.parentElement?.parentElement as HTMLTableRowElement).cells);
            }
        });
    }
})();
