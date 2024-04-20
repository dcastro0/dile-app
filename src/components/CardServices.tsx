import { Feather } from "@expo/vector-icons";
import { Text, View } from "react-native";
import { stylesServices } from "../styles/stylesServices";

interface CardServicesProps {
  title: string;
  data: string;
  itensResolvidos: string[];
  valor: number;
}

const CardServices = ({
  title,
  data,
  itensResolvidos,
  valor,
}: CardServicesProps) => {
  return (
    <View style={stylesServices.containerCard}>
      <Text style={stylesServices.title}>{title}</Text>
      <View style={stylesServices.card}>
        <View style={stylesServices.row}>
          <View style={stylesServices.row}>
            <Feather name="tool" />
            <Text style={stylesServices.text18}>Itens Resolvidos</Text>
          </View>
          <Text style={stylesServices.data}>{data}</Text>
        </View>
        <View>
          {itensResolvidos.map((item, index) => (
            <View style={stylesServices.row} key={index}>
              <Feather name="arrow-right" />
              <Text  style={stylesServices.text18}>
                {item}
              </Text>
            </View>
          ))}
        </View>
        <View>
          <View style={stylesServices.row}>
            <Feather name="file-text" />
            <Text style={stylesServices.text18}>Descrição</Text>
          </View>
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Reprehenderit vel laborum nesciunt dicta voluptatem ut, ratione
            aspernatur accusamus temporibus eveniet et molestias laboriosam
            nobis sequi provident vitae eos ab architecto!
          </Text>
        </View>
      </View>
      <View style={stylesServices.valor}>
        <Text style={stylesServices.textGreen}>R$ {valor}</Text>
      </View>
    </View>
  );
};
export { CardServices };
