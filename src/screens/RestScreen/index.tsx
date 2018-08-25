import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StatusBar, Image } from 'react-native';
import { NavigationScreenProps } from 'react-navigation';
import AppText from '../../components/AppText';
import { Transition } from 'react-navigation-fluid-transitions';
import Layout from '../../components/Layout';
import { Header, Left, Right, Icon, Content } from 'native-base';
import { gradient } from '../../styles';
import LinearGradient from 'react-native-linear-gradient';
import styles from './styles';
import MapView from 'react-native-maps';
import config from '../../../config';

interface IProps extends NavigationScreenProps {

}
class RestScreen extends Component<IProps> {
    render() {
        return (
            <Layout>
                <Header style={{ padding: 0 }}>
                    <LinearGradient style={styles.Header} colors={gradient} start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }}  >
                        <Left style={{ flex: 1 }}>
                            <TouchableOpacity>
                                <Icon name="three-bars" style={{ color: 'white' }} type="Octicons" />
                            </TouchableOpacity>
                        </Left>
                        <Right />
                    </LinearGradient>
                </Header>
                <Content>
                    <MapView initialRegion={{
                        latitude: 37.78825,
                        longitude: -122.4324,
                        latitudeDelta: 0.0222,
                        longitudeDelta: 0.0221,
                    }}
                        style={styles.MapStyle}
                        provider="google"
                        customMapStyle={config.mapStyle}
                    />
                    <Transition appear="horizontal">
                        <LinearGradient colors={gradient} start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} style={styles.Content}>
                            <AppText style={styles.FirstText}>I want to</AppText>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <View style={{ flex: 1 }} />
                                <View style={{ flex: 3, alignItems: 'center' }}>
                                    <AppText style={styles.Text2}>REST</AppText>
                                </View>
                                <TouchableOpacity style={{ flex: 1, alignItems: 'flex-end', marginRight: 5 }}
                                    onPress={() => { this.props.navigation.navigate('Think') }}>
                                    <Icon name="arrow-right" type="SimpleLineIcons" style={{ fontSize: 40, color: 'white' }} />
                                </TouchableOpacity>
                            </View>
                            <TouchableOpacity style={styles.Button} onPress={() => this.props.navigation.navigate('MainMap')}>
                                <AppText >MAKE A PLAN FOR ME</AppText>
                            </TouchableOpacity>
                        </LinearGradient>
                    </Transition>
                    <Image source={{
                        uri:
                            'https://scontent.fhan1-1.fna.fbcdn.net/v/t1.0-9/31510482_2142751972626891_6298532426771595264_n.jpg?_nc_cat=0&oh=cf65edd1397ca15cac6cfdb2c7cf8142&oe=5BF6E34D'
                    }}
                        style={styles.Circle}
                    />
                </Content>
            </Layout >
        );
    }
}

export default RestScreen;