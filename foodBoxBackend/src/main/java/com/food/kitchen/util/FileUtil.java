package com.food.kitchen.util;

import java.nio.file.Path;
import java.nio.file.Paths;

public class FileUtil {

    private FileUtil() {
        // restrict instantiation
    }

    public static final String folderPath = "C:\\Users\\Shilpa Ranjan\\Documents\\Angular\\AngularIntro\\kitchenStory\\src\\assets\\" ;
    public static final Path filePath = Paths.get(folderPath);
}
