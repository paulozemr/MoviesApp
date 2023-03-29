import { StyleSheet, Text, View, ScrollView, Image, TouchableOpacity } from 'react-native';
import { useState } from 'react';

export default function filmesRecentes() {

  const [filmesRecentes, setFilmesRecentes] = useState([ 
    {
      id: 1,
      titulo: 'Cocaine Bear', 
      nota: '9',
      genero: 'Ficção', 
      imagem: 'https://m.media-amazon.com/images/M/MV5BODAwZDQ5ZjEtZDI1My00MTFiLTg0ZjUtOGE2YTBkOTdjODFhXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_.jpg',
    },
    {
      id: 2,
      titulo: 'TTlAMT',
      nota: '8',
      genero: 'Ficção cientifica, Aventura', 
      imagem: 'https://upload.wikimedia.org/wikipedia/en/1/1e/Everything_Everywhere_All_at_Once.jpg',
    },
    {
      id: 3,
      titulo: 'O ultimo pedido',
      nota: '9', 
      genero: 'Aventura, Comédia', 
      imagem: 'http://www.cinesystem.com.br/filmes/images/poster/gato-de-botas-2-o-ultimo-pedido.jpg',
    },
    {
      id: 4,
      titulo: 'Tetris',
      nota: '7.5',
      genero: 'Cellbit, Drama, Comédia',
      imagem: 'https://cinema10.com.br/upload/featuredImage.php?url=https%3A%2F%2Fcinema10.com.br%2Fupload%2Ffilmes%2Ffilmes_16807_tetris-filme-poster.jpg',
    },
    {
      id: 5,
      titulo: 'D&D:HER',
      nota: '8.4',
      genero: 'Aventura, Fantasia',
      imagem: 'https://t2.tudocdn.net/649250?w=660&h=825',
    },
  ]);

  function Card(props){
    function excluirFilme() {
      setFilmesRecentes(filmesRecentes.filter(filme => filme.id !== props.filme.id));
    }
    return(
      <View style={styles.filmes}>
        <Image style={styles.imagens} source={{uri: props.filme.imagem}} />
        <Text style={styles.titulo}>{props.filme.titulo}</Text>
        <Text style={styles.nota}>{props.filme.nota}</Text>
        <Text style={styles.texto}>{props.filme.genero}</Text>
        <TouchableOpacity onPress={excluirFilme}>
          <Image style={styles.lixo} source={{uri: 'https://cdn-icons-png.flaticon.com/512/2891/2891491.png'}} />
        </TouchableOpacity>
      </View>
    )
  }

  return (
    <View>
      <Text style={styles.categoria}>Bem avaliados recentemente</Text>
        <ScrollView horizontal pagingEnabled>
          {filmesRecentes.map(filme => <Card key={filme.id} filme={filme} />)}
        </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  filmes: {
    width: 150,
    height: 370,
    paddingBottom: 10,
    backgroundColor: '#765898',
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
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
    marginLeft: 5,
  },
  nota: {
    textAlign: 'left',
    height: 45,
    fontSize: 14,
    color: '#e6770b',
    marginLeft: 5,
  },
  texto: {
    textAlign: 'left',
    height: 50,
    fontSize: 14,
    color: '#d3290f',
    marginLeft: 5,
  },
  categoria: {
    fontSize: 29,
    marginLeft: 7,
  },
  lixo: {
    width: 25,
    height: 25,
    position: 'absolute',
    right: 5,
    bottom: 9,
  },
});