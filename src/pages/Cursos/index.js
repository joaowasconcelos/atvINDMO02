import { Text, Button, View, StyleSheet, ScrollView, Platform } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Cursos() {
    return (
        <SafeAreaView style={[styles.container, styles.androidSafeArea]}>
            <ScrollView>
                <View>

                    <View >
                        <Text style={styles.container1}>TÉCNICO EM ADMINISTRAÇÃO</Text>
                        <Text style={styles.Text}>O curso técnico de Administração tem por objetivo habilitar profissionais em realizar e gerir processos administrativos das áreas da indústria e de serviços, utilizando-se de técnicas e tecnologias apropriadas e de padrões éticos, legais, de qualidade e segurança, com responsabilidade social e ambiental.</Text>
                    </View>

                    <View >
                        <Text style={styles.container1}>TÉCNICO EM ELETROMECÂNICA</Text>
                        <Text style={styles.Text}>O curso técnico de Eletromecânica tem por objetivo habilitar profissionais no planejamento, no controle e na realização de atividades relativas à manutenção eletromecânica, em conformidade às normas técnicas, ambientais, de qualidade e de segurança e saúde no trabalho.</Text>
                    </View>


                    <View>
                        <Text style={styles.container1}>TÉCNICO EM DESENVOLVIMENTO DE SISTEMAS</Text>
                        <Text style={styles.Text}>O Curso Técnico de Desenvolvimento de Sistemas tem por objetivo habilitar profissionais para analisar requisitos funcionais e não funcionais de produtos, desenvolver e testar sistemas de software, de acordo com as especificações do projeto, considerando as boas práticas do mercado de tecnologia da informação e as necessidades do usuário.</Text>
                    </View>


                </View>

            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    androidSafeArea: {
        paddingTop: Platform.OS === 'android' ? 35 : 0,
    },
    container: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        height: 700,
        gap: 100,


    },
    container1: {
        margin: 10,
        height: 30,
        backgroundColor: "#A9A9A9",
        textAlign: "center",
    
    },
    Text: {
        height: 150,
        width: 350,
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",


    }
})


