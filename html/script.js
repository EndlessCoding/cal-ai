document.addEventListener('DOMContentLoaded', function() {

    // 1. Button Hover Effects (Primarily CSS, but JS can enhance if needed)
    // For now, we'll assume CSS :hover is sufficient as per the problem description.
    // If more complex JS-driven hover effects are needed, they can be added here.
    // Example:
    // const buttons = document.querySelectorAll('.button'); // Assuming a common class for all buttons
    // buttons.forEach(button => {
    //     button.addEventListener('mouseover', () => {
    //         // More complex JS hover logic
    //     });
    //     button.addEventListener('mouseout', () => {
    //         // Restore original state
    //     });
    // });

    // 2. Page Transitions (Simple Fade In)
    document.body.style.opacity = '0';
    // Force a reflow, otherwise the transition might not trigger reliably
    // void document.body.offsetWidth; // Reading offsetWidth is a common way to trigger reflow
    // Using setTimeout is a more robust way to ensure the style is applied before transition starts
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease-in-out';
        document.body.style.opacity = '1';
    }, 10); // A small delay can help ensure the initial opacity is registered

    // Fade out on navigation (more complex, simplified for now)
    // For a true fade-out before navigation, we'd need to:
    // 1. Intercept click events on navigation links/buttons.
    // 2. Prevent default navigation.
    // 3. Play fade-out animation on the body.
    // 4. After animation, perform the navigation.
    // This is a simplified version: CSS should handle transition smoothness.
    // Adding a class to body on unload might be an option too but can be unreliable.

    // 3. Form Input Focus Effects & Hint Text Behavior
    const formInputs = document.querySelectorAll('input[type="text"], textarea');

    formInputs.forEach(input => {
        const parentGroup = input.closest('.form-group'); // Assuming inputs are in a .form-group
        let hintTextElement = null;
        if (parentGroup) {
            hintTextElement = parentGroup.querySelector('.hint-text');
        } else {
            // Fallback if .form-group is not used, try to find a sibling .hint-text
            const siblingHint = input.nextElementSibling;
            if (siblingHint && siblingHint.classList.contains('hint-text')) {
                hintTextElement = siblingHint;
            }
        }

        if (hintTextElement) {
            // Initially check if input has value (e.g. from browser autofill)
            if (input.value.trim() !== '') {
                hintTextElement.style.opacity = '0'; // Hide if already has value
            }


            input.addEventListener('focus', () => {
                hintTextElement.style.transition = 'opacity 0.3s ease-in-out';
                hintTextElement.style.opacity = '0.5'; // Or '0' to completely hide
            });

            input.addEventListener('blur', () => {
                if (input.value.trim() === '') {
                    hintTextElement.style.opacity = '1';
                } else {
                    hintTextElement.style.opacity = '0'; // Keep hidden if there's text
                }
            });
        }

        // CSS :focus for border color change is already expected to be working.
        // This JS part is specifically for the hint text.
    });

});
