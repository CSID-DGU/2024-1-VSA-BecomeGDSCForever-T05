import 'package:flutter/material.dart';
import 'package:flutter_dotenv/flutter_dotenv.dart';
import 'package:intl/date_symbol_data_local.dart';
import 'package:modeul/main_app.dart';
import 'package:timezone/data/latest.dart' as tz;

void main() async {
  await onInitSystem();
  await onReadySystem();

  runApp(const MainApp());
}

Future<void> onInitSystem() async {
  // Environment
  await dotenv.load(fileName: "assets/config/.env");

  // Widget Binding
  WidgetsFlutterBinding.ensureInitialized();

  // DateTime Formatting
  await initializeDateFormatting();
  tz.initializeTimeZones();
}

Future<void> onReadySystem() async {}
