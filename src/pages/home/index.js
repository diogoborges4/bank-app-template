import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, FlatList } from "react-native";
import Header from "../../components/Header";
import Balance from "../../components/Balance";
import Transations from "../../components/Transations";
import Actions from "../../components/Actions/Actions";

const list = [
  {
    id: 1,
    label: "Boleto conta luz",
    value: "-150,00",
    date: "16/07/2023",
    type: 0,
  },
  {
    id: 2,
    label: "Mercado da esquina",
    value: "-150,00",
    date: "06/08/2023",
    type: 0,
  },
  {
    id: 3,
    label: "Sálario",
    value: "+1150,00",
    date: "06/09/2023",
    type: 1,
  },
];

export default function Home() {
  return (
    <View style={styles.container}>
      <Header name="User" />

      <Balance saldo="8.000.00" gastos="-400,00" />

      <Actions />

      <Text style={styles.title}>Últimas movimentações</Text>

      <FlatList
        style={styles.list}
        data={list}
        keyExtractor={(item) => String(item.id)}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => <Transations data={item} />}
      />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fafafa",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    margin: 14,
  },
  list: {
    marginStart: 14,
    marginEnd: 14,
  },
});
