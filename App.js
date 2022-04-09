import React from 'react';
import {
  StyleSheet,
  Image,
  Text,
  TextInput,
  View,
  ImageBackground,
} from 'react-native';

const Dashboard = () => {
  return (
    <View style={styles.StartingPage}>
      <View style={styles.Group051}>
        <Image
          style={styles.Welove_7_RemovebgPreview1}
          source={{
            uri: 'https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/wuz7w28vdc-859%3A958?alt=media&token=c029e94e-00bd-4628-bcd2-fa7244534c46',
          }}
        />
        <Text style={styles.Txt1099}>Welove</Text>
        <Text style={styles.Txt3108}>
          Sayangi sampah skincare mu sayangi bumi hari ini
        </Text>
        <Image
          style={styles.Ellipse7}
          source={{
            uri: 'https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/wuz7w28vdc-879%3A906?alt=media&token=bb57d0b1-9e8b-4bf0-aa52-608c8565fd78',
          }}
        />
      </View>
      <Text style={styles.Txt9810}>Ayo mulai!</Text>
    </View>
  );
};

const LoginPage = () => {
  return (
    <View style={styles.LoginPage}>
      <View style={styles.Group999}>
        <Image
          style={styles.Welove_7_RemovebgPreview2}
          source={{
            uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/nltkn9pd0yq-859%3A965?alt=media&token=0604b742-2392-4b2c-a9fa-d9b0336d1f96",
          }}
        />
        <Text style={styles.Txt167}>
          menjadi lebih peduli lingkungan dengan langkah kecil memilah sampah
          secara mandiri!
        </Text>
        <View style={styles.Group54}>
          <View style={styles.Group64}>
            <Image
              style={styles.Group53}
              source={{
                uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/nltkn9pd0yq-852%3A937?alt=media&token=8ace0089-eac0-4b3c-8831-ceb8e8fce024",
              }}
            />
            <TextInput style={styles.Txt377} />
          </View>
        </View>
        <View style={styles.Group63}>
          <Image
            style={styles.Vector}
            source={{
              uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/nltkn9pd0yq-852%3A946?alt=media&token=afe942ce-4ee8-4ca1-8fc6-6b12e1af8486",
            }}
          />
          <Text style={styles.Txt377}>Masukan Kata Sandi</Text>
        </View>
        <View style={styles.Group65}>
          <Text style={styles.Txt927}>Masuk</Text>
        </View>
        <View style={styles.Group66}>
          <Text style={styles.Txt358}>Lupa Kata Sandi?</Text>
        </View>
        <View style={styles.Group67}>
          <Text style={styles.Txt358}>Buat akun baru</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  LoginPage: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    paddingTop: 133,
    paddingBottom: 39,
    paddingLeft: 44,
    paddingRight: 51,
    backgroundColor: "rgba(255, 255, 255, 1)",
    width: 375,
    height: 812,
  },
  Group999: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  Welove_7_RemovebgPreview2: {
    width: 222,
    height: 185,
    marginBottom: 19,
  },
  Txt167: {
    fontSize: 12,
    fontFamily: "Amiko, sans-serif",
    fontWeight: "600",
    lineHeight: 23,
    color: "rgba(0,0,0,0.41)",
    textAlign: "center",
    justifyContent: "center",
    marginBottom: 55,
  },
  Group54: {
    marginBottom: 19,
    borderRadius: 6,
    backgroundColor: "rgba(240,240,240,0.48)",
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "rgba(125,143,53,1)",
    width: 270,
    height: 44,
  },
  Group64: {
    display: "flex",
    flexDirection: "row",
    paddingTop: 10,
    paddingBottom: 5,
    paddingLeft: 17,
    paddingRight: 68,
    borderRadius: 6,
    backgroundColor: "rgba(240,240,240,0.48)",
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "rgba(125,143,53,1)",
  },
  Group53: {
    width: 16,
    height: 18,
    marginRight: 8,
  },
  Txt377: {
    fontSize: 15,
    fontFamily: "Alice, serif",
    fontWeight: "400",
    letterSpacing: 0.3,
    color: "rgba(0,0,0,0.87)",
    textAlign: "center",
    justifyContent: "center",
    width: 159,
    height: 23,
  },

  Group63: {
    display: "flex",
    flexDirection: "row",
    paddingTop: 10,
    paddingBottom: 9,
    paddingLeft: 17,
    paddingRight: 51,
    marginBottom: 71,
    borderRadius: 6,
    backgroundColor: "rgba(240,240,240,0.48)",
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "rgba(125,143,53,1)",
  },
  Vector: {
    width: 18.27,
    height: 17.44,
    marginRight: 23,
  },
  Txt377: {
    fontSize: 15,
    fontFamily: "Alice, serif",
    fontWeight: "400",
    letterSpacing: 0.3,
    color: "rgba(0,0,0,0.87)",
    textAlign: "center",
    justifyContent: "center",
    width: 159,
    height: 23,
  },

  Group65: {
    paddingTop: 10,
    paddingBottom: 9,
    paddingLeft: 56,
    paddingRight: 53,
    marginBottom: 11,
    borderRadius: 6,
    backgroundColor: "rgba(125,143,53,1)",
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "rgba(125,143,53,1)",
    width: 270,
    height: 44,
  },
  Txt927: {
    fontSize: 18,
    fontFamily: "Alice, serif",
    fontWeight: "400",
    letterSpacing: 0.3,
    color: "rgba(255, 255, 255, 1)",
    textAlign: "center",
    justifyContent: "center",
    width: 159,
    height: 23,
  },

  Group66: {
    paddingTop: 10,
    paddingBottom: 9,
    paddingLeft: 63,
    paddingRight: 46,
    marginBottom: 11,
    backgroundColor: "white",
    /*  linear-gradient(0deg, rgba(248,248,248,1), rgba(248,248,248,1)),url(https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/nltkn9pd0yq-881%3A916?alt=media&token=282b3bcf-a42b-4a25-be1d-22ab60865223) */
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "rgba(125,143,53,1)",
    width: 270,
    height: 44,
  },
  Txt358: {
    fontSize: 18,
    fontFamily: "Alice, serif",
    fontWeight: "400",
    letterSpacing: 0.3,
    color: "rgba(125,143,53,1)",
    textAlign: "center",
    justifyContent: "center",
    width: 159,
    height: 23,
  },

  Group67: {
    paddingTop: 10,
    paddingBottom: 9,
    paddingLeft: 59,
    paddingRight: 50,
    backgroundColor: "white",
    /*  linear-gradient(0deg, rgba(248,248,248,1), rgba(248,248,248,1)),url(https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/nltkn9pd0yq-881%3A918?alt=media&token=ea58e196-9ddb-49da-b331-a8e5246e1e61) */
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "rgba(125,143,53,1)",
    width: 270,
    height: 44,
  },
  Txt358: {
    fontSize: 18,
    fontFamily: "Alice, serif",
    fontWeight: "400",
    letterSpacing: 0.3,
    color: "rgba(125,143,53,1)",
    textAlign: "center",
    justifyContent: "center",
    width: 159,
    height: 23,
  },
});

export default LoginPage;
