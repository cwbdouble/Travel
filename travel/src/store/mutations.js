
export default {
	change (state, city) {
		state.city = city
		try {
			localStorage.city = city
		}catch(e){				
		}
	}
}