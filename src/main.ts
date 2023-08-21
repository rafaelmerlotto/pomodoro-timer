



function timer() {
    function creareSecondi(secondi: number) {
        const data: Date = new Date(secondi * 1000);

        return data.toLocaleTimeString('it-IT', {
            hour12: false,
            timeZone: 'UTC',
            formatMatcher: "best fit",
            minute: 'numeric',
            second: 'numeric'

        });
    }


    const inputElement: HTMLInputElement | null = document.getElementById("myInput") as HTMLInputElement;
    const buttonElement: HTMLButtonElement | null = document.getElementById("myButton") as HTMLButtonElement;

    if (inputElement && buttonElement) {
        buttonElement.addEventListener("click", () => {
            const inputValue: number = Number(inputElement.value);
            const orologioTimer: any = document.querySelector('.timer');
            let secondi: number = 60 * inputValue;
            let secondiTimer: any;

            function startTimer(): void {
                secondiTimer = setInterval(function () {
                    secondi--;
                    orologioTimer.innerHTML = creareSecondi(secondi);

                    if (secondi == 0) {
                        clearInterval(secondiTimer)
                        console.log('timer scaduto')
                    }
                }, 1000);

            }
            if (inputValue < 10) {
                orologioTimer.innerHTML = `0${inputValue}:00`;
            } else {
                orologioTimer.innerHTML = `${inputValue}:00`;
            }
            if (inputValue > 60) {
                orologioTimer.innerHTML = `impostazione max 60 min`;

            }


            document.addEventListener('click', function (e) {
                const el: any = e.target;

                if (el.classList.contains('reset')) {
                    clearInterval(secondiTimer);
                    orologioTimer.innerHTML = '00:00';
                    orologioTimer.classList.remove('stop');
                    secondi = 60 * inputValue;
                }

                if (el.classList.contains('start')) {
                    orologioTimer.classList.remove('stopped');
                    clearInterval(secondiTimer);
                    startTimer();
                }

                if (el.classList.contains('stop')) {
                    clearInterval(secondiTimer);
                    orologioTimer.classList.add('stopped');
                }

                if (el.classList.contains('stop')) {
                    clearInterval(secondiTimer);
                    orologioTimer.classList.add('stopped');
                }
            });

        });
    }

}
timer();


