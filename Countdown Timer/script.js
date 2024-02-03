let countdownInterval;

        function startCountdown() {
            const targetDateTimeString = document.getElementById('datetime').value;

            if (!targetDateTimeString) {
                alert('Please select a valid date and time.');
                return;
            }

            const targetDateTime = new Date(targetDateTimeString).getTime();

            if (isNaN(targetDateTime)) {
                alert('Invalid date and time format.');
                return;
            }

            clearInterval(countdownInterval);

            countdownInterval = setInterval(function() {
                const now = new Date().getTime();
                const timeDifference = targetDateTime - now;

                if (timeDifference <= 0) {
                    clearInterval(countdownInterval);
                    document.getElementById('countdown').innerHTML = 'Countdown Expired!';
                    playAlarmSound();
                    showStopAlarmButton();
                } else {
                    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
                    const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
                    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

                    document.getElementById('countdown').innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
                }
            }, 1000);
        }