function updateCountdown() 
        {
            const eventDate = new Date('2025-02-13');
            const now = new Date();
            const timeLeft = eventDate - now;

            if(timeLeft <= 0) 
            {
                document.getElementById('countdown').innerText = 'The Datathon is happening now!';
                return;
            }

            const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
            const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

            document.getElementById('countdown').innerText = `${days}d ${hours}h ${minutes}m ${seconds}s`;
        }

        setInterval(updateCountdown, 1000);