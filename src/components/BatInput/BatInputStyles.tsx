import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1, // Faz o container do input ocupar o espaço disponível na linha
    height: 50,
  },
  batInput: {
    width: '100%',
    height: '100%',
    backgroundColor: '#fff',
    borderColor: '#E5BF3C',
    borderWidth: 3,
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
    borderRightWidth: 0, // Remove a borda direita para se unir ao botão
    textAlign: 'center',
    textAlignVertical: 'center',
  },
});