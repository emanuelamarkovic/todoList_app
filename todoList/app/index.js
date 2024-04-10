import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Redirect } from "expo-router";

export default function Page() {
  return <Redirect href="/(authenticate)/login" />;
}

const styles = StyleSheet.create({});
