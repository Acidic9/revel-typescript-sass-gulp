class Debug {
	public static debugSidebarElem: HTMLDivElement = document.getElementById('debug-sidebar') as HTMLDivElement
	public static debugSidebarTogglerElem: HTMLDivElement = document.getElementById('debug-sidebar-toggler') as HTMLDivElement

	public static main(): number {
		this.debugSidebarTogglerElem.addEventListener('click', () => { this.toggleDebugSidebar() })
		window.addEventListener('click', (ev) => {
			if (this.debugSidebarVisible && !this.debugSidebarElem.contains(ev.target as Node)) {
				this.toggleDebugSidebar(false)
			}
		})
		return 0
	}

	public static toggleDebugSidebar(show: boolean | null = null) {
		if (typeof show !== 'boolean') {
			show = !this.debugSidebarVisible
		}
	 if (show) {
			this.debugSidebarElem.classList.add('visible')
			this.debugSidebarVisible = true
		} else {
			this.debugSidebarElem.classList.remove('visible')
			this.debugSidebarVisible = false
		}
	}

	private static debugSidebarVisible: boolean = Debug.debugSidebarElem.classList.contains('visible')
}

Debug.main()
