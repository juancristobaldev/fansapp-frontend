export const CitySearch = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [cityResults, setCityResults] = useState([]);
  
    const apiKey = 'TU_CLAVE_DE_API_GOOGLE_PLACES';
  
    const handleSearch = async () => {
      try {
        const response = await axios.get(
          `https://maps.googleapis.com/maps/api/place/textsearch/json?query=${searchTerm}&key=${apiKey}`
        );
        setCityResults(response.data.results);
      } catch (error) {
        console.error('Error en la búsqueda de ciudades:', error);
      }
    };
  
    return (
      <View>
        <TextInput
          placeholder="Escribe una ciudad..."
          onChangeText={(text) => setSearchTerm(text)}
          onBlur={handleSearch}
        />
        <FlatList
          data={cityResults}
          renderItem={({ item }) => <Text>{item.name}</Text>}
          keyExtractor={(item) => item.place_id}
        />
      </View>
    );
  };
  