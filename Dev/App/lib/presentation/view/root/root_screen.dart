import 'package:flutter/material.dart';
import 'package:modeul/app/config/font_system.dart';
import 'package:modeul/core/screen/base_default_screen.dart';
import 'package:modeul/presentation/view_model/root/root_view_model.dart';

class RootScreen extends BaseDefaultScreen<RootViewModel> {
  const RootScreen({super.key});

  @override
  Widget buildBody(BuildContext context) {
    return const Center(
      child: Text(
        'Root Screen',
        style: FontSystem.Sub1,
      ),
    );
  }
}
