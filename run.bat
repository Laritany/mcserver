@echo OFF
@set a=0
:Menu
title FarmingTales_ForgeⅡ v1.0.6 重启次数[%a%]
echo ============================================================
echo           FarmingTales_ForgeⅡ v1.0.6 [重启次数: %a%]
echo ============================================================

REM Forge requires a configured set of both JVM and program arguments.
REM Add custom JVM arguments to the user_jvm_args.txt
REM Add custom program arguments {such as nogui} to this file in the next line before the %* or
REM  pass them to this script directly
java @user_jvm_args.txt @libraries/net/minecraftforge/forge/1.20.1-47.4.1/win_args.txt %* nogui
@echo OFF
@echo 服务器炸膛了，将在5秒后重新启动
@ping -n 10 127.0.0.1>nul
@set /a a=%a%+1
@goto Menu
pause