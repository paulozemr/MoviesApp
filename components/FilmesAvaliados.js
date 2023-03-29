import { StyleSheet, Text, View, ScrollView, Image, TouchableOpacity } from 'react-native';
import { useState } from 'react';

export default function filmesRecentes() {

  const [filmesAvaliados, setFilmesAvaliados] = useState([
    {
      id: 6,
      titulo: 'Call of Gruty',
      genero: 'Ação, Drama',
      imagem: 'https://static.wikia.nocookie.net/unmario/images/6/68/DfVsX7yWAAIhcje.jpg/revision/latest?cb=20180708224427',
    },
    {
      id: 7,
      titulo: 'A Sociedade do anel',
      genero: 'Ação, Ficção, Aventura',
      imagem: 'https://br.web.img3.acsta.net/medias/nmedia/18/92/91/32/20224832.jpg',
    },
    {
      id: 8,
      titulo: 'InterStellar',
      genero: 'Ficção cientifica, Aventura',
      imagem: 'https://upload.wikimedia.org/wikipedia/pt/thumb/3/3a/Interstellar_Filme.png/250px-Interstellar_Filme.png',
    },
    {
      id: 9,
      titulo: 'As Duas torres',
      genero: 'Ação, Ficção, Aventura',
      imagem: 'https://br.web.img2.acsta.net/medias/nmedia/18/92/34/89/20194741.jpg',
    },
    {
      id: 10,
      titulo: 'O Retorno do Rei',
      genero: 'Ação, Ficção, Aventura',
      imagem: 'https://cdn.shopify.com/s/files/1/0529/5125/3158/products/9786555113662.jpg?v=1678779979',
    },
  ]);

  function Card(props) {
    function excluirFilme() {
      setFilmesAvaliados(filmesAvaliados.filter(filme => filme.id !== props.filme.id));
    }
    return (
      <View style={styles.filmes}>
        <Image style={styles.imagens} source={{ uri: props.filme.imagem }} />
        <Text style={styles.titulo}>{props.filme.titulo}</Text>
        <Text style={styles.texto}>{props.filme.genero}</Text>
        <TouchableOpacity onPress={excluirFilme}>
          <Image style={styles.lixo} source={{ uri: 'https://cdn-icons-png.flaticon.com/512/2891/2891491.png' }} />
        </TouchableOpacity>
      </View>
    )
  }

  return (
    <View>
      <Text style={styles.categoria}>Melhores Avaliados</Text>
      <ScrollView horizontal pagingEnabled>
        {filmesAvaliados.map(filme => <Card key={filme.id} filme={filme} />)}
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
    shadowOpacity: 0.20,
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
    height: 50,
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