class ApiService {
  async fetchData() {
    try {
      const response = await fetch("https://api.example.com/data")
      const data = await response.json()
      return data
    } catch (error) {
      // Manejar errores
      console.error("Error fetching data:", error)
      throw error
    }
  }
}
