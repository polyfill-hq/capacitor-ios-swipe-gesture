package com.capacitor.plugin.ios.swipe;

import com.getcapacitor.JSObject;
import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;
import com.getcapacitor.annotation.CapacitorPlugin;

@CapacitorPlugin(name = "iOSSwipeGesture")
public class iOSSwipeGesturePlugin extends Plugin {
    @PluginMethod
    public void enable(PluginCall call) {
        call.unimplemented("Not implemented on Android.");
    }

    @PluginMethod
    public void disable(PluginCall call) {
        call.unimplemented("Not implemented on Android.");
    }
}
