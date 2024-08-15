import 'package:get/get.dart';
import 'package:modeul/app/config/app_routes.dart';
import 'package:modeul/presentation/view/root/root_screen.dart';
import 'package:modeul/presentation/view_model/root/root_binding.dart';

/// GetPage is a configuration class that is used to define a route in GetMaterialApp.
abstract class AppPages {
  static List<GetPage> data = [
    GetPage(
      name: AppRoutes.ROOT,
      page: () => const RootScreen(),
      binding: RootBinding(),
    ),
  ];
}
