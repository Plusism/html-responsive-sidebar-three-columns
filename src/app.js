const xApp = () => {
	return {
		menu: {
			isVisible: Alpine.$persist(false).using(sessionStorage),
			toggle() {
				this.isVisible = !this.isVisible;
				// console.log('[menu] toggle', this.isVisible);
			},
			close() {
				const width = document.querySelector('.app').clientWidth;
				if(width < 1440){
					this.isVisible = false;
				}
				// console.log('[menu] close', this.isVisible);
			}
		},
		side: {
			isVisible: Alpine.$persist(false).using(sessionStorage),
			toggle() {
				this.isVisible = !this.isVisible;
				// console.log('[side] toggle', this.isVisible);
			},
			close() {
				this.isVisible = false;
				// console.log('[side] close', this.isVisible);
			}
		},
		init() {
			// console.log('[xApp] init');
		},
	};
};
 