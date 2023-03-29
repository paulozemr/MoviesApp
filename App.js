import { StyleSheet, Text, View, ScrollView, Image, TouchableOpacity } from 'react-native';
import FilmesRecentes from './components/FilmesRecentes';
import FilmesAvaliados from './components/FilmesMelhoresAvaliados';

export default function App() {

  function Card(props){
    function excluirFilme() {
      setFilmesRecentes(filmesRecentes.filter(filme => filme.id !== props.filme.id)),
      setFilmesMelhoresAvaliados(filmesMelhoresAvaliados.filter(filme => filme.id !== props.filme.id));
    }
    return(
      <View style={styles.filmes}>
        <Image style={styles.imagens} source={{uri: props.filme.imagem}} />
        <Text style={styles.titulo}>{props.filme.titulo}</Text>
        <Text style={styles.texto}>{props.filme.genero}</Text>
        <TouchableOpacity onPress={excluirFilme}>
          <Image style={styles.lixo} source={{uri: 'https://cdn-icons-png.flaticon.com/512/2891/2891491.png'}} />
        </TouchableOpacity>
      </View>
    )
  }

  return (
    <View style={styles.container}>
      <ScrollView> 
        <Text style={styles.nome}>Filmes requintados</Text>
        <FilmesRecentes />
        <FilmesAvaliados />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#52d053',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50,
  },
  nome: {
    fontSize: 35,
    backgroundColor: 'green',
    width: '100%',
    textAlign: 'center',
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity:  0.20,
    shadowRadius: 5.62,
    elevation: 7,
    marginBottom: 10,
  },
  filmes: {
    width: 150,
    height: 370,
    paddingBottom: 10,
    backgroundColor: '#f0f0f0',
    justifyContent: 'center', 
    borderRadius: 10,
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity:  0.20,
    shadowRadius: 5.62,
    elevation: 7,
    margin: 7,
  },
  imagens: {
    maxWidth: 150,
    height: 270,
    borderTopRightRadius: 5,
    borderTopLeftRadius: 5,
    resizeMode: 'stretch',
  },
  titulo: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    height: 50,
    marginLeft: 5,
  },
  texto: {
    textAlign: 'left',
    height: 50,
    fontSize: 19,
    color: 'blue',
    marginLeft: 5,
  },
  categoria: {
    fontSize: 30,
    marginLeft: 7,
  },
  lixo: {
    width: 25,
    height: 25,
    position: 'absolute',
    right: 5,
    bottom: 1,
  },
});
