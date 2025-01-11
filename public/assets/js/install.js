// Get the install button element
const butInstall = document.getElementById('buttonInstall');
console.log('install working');

// Listen for the 'beforeinstallprompt' event
window.addEventListener('beforeinstallprompt', (event) => {
    console.log('before install');

    // Prevent the mini-infobar from appearing on mobile
    event.preventDefault();

    // Stash the event so it can be triggered later
    window.deferredPrompt = event;

    // Make the install button visible
    butInstall.classList.remove('hidden');
});

// Handle the click event on the install button
butInstall.addEventListener('click', async () => {
    console.log('clicked');

    const promptEvent = window.deferredPrompt;
    if (!promptEvent) {
        return;
    }

    // Show the install prompt
    promptEvent.prompt();

    // Wait for the user to respond to the prompt
    const result = await promptEvent.userChoice;
    console.log('User choice:', result);

    // Clear the deferredPrompt variable
    window.deferredPrompt = null;

    // Hide the install button
    butInstall.classList.add('hidden');
});

// Listen for the 'appinstalled' event
window.addEventListener('appinstalled', (event) => {
    console.log('appinstalled');
    // Clear the deferredPrompt since the app is installed
    window.deferredPrompt = null;
});
