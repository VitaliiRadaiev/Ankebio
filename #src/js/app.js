window.addEventListener('DOMContentLoaded', () => {
	document.body.classList.add('page-loaded');

	// Main Form Validation
	const form = document.querySelector('[data-form]');
	if (form) {
		const inputName = document.querySelector('input#name');
		const inputPhone = document.querySelector('input#phone');
		form.addEventListener('submit', (e) => {
			e.preventDefault();
			const inputNameValidResult = inputName.value.length === 0;
			const inputPhoneValidResult = inputPhone.value.replace(/[\s_]/g, '').length !== 12;

			if (inputNameValidResult) inputName.classList.add('error');
			if (inputPhoneValidResult) inputPhone.classList.add('error');

			if(!inputNameValidResult && !inputPhoneValidResult) form.submit();
		});

		;[inputName, inputPhone].forEach(input => {
			input.addEventListener('focus', () => {
				input.classList.remove('error');
			})
		})
	}

	// Fields labels animation
	const inputs = document.querySelectorAll('input.input');
	if (inputs.length) {
		inputs.forEach(input => {
			input.addEventListener('focus', () => {
				input.classList.add('using');
			});

			input.addEventListener('blur', () => {
				if (input.value.length === 0) input.classList.remove('using');
			});
		})
	}

	// Phone Mask
	let items = document.querySelectorAll('[data-mask]');
	if (items.length) {
		items.forEach(item => {
			let maskValue = item.dataset.mask;

			Inputmask(maskValue, {
				clearIncomplete: false,
				clearMaskOnLostFocus: false,
			}).mask(item);

		})
	}
});
