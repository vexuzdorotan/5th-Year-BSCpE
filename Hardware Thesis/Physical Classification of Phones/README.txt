TRAINING:

// python -m scripts.retrain  --bottleneck_dir=tf_files/bottlenecks  --how_many_training_steps 500 --model_dir=tf_files/models/inception --architecture=inception_v3 --output_graph=tf_files/retrained_graph.pb --output_labels=tf_files/retrained_labels.txt --image_dir=tf_files/DataSet/


python -m scripts.retrain  --bottleneck_dir=tf_files/bottlenecks/PhoneType  --how_many_training_steps 500 --model_dir=tf_files/models/inception --architecture=inception_v3 --output_graph=tf_files/PhoneType.pb --output_labels=tf_files/PhoneType.txt --image_dir=tf_files/DataSet/PhoneType

python -m scripts.retrain  --bottleneck_dir=tf_files/bottlenecks/SmartPhoneClass  --how_many_training_steps 500 --model_dir=tf_files/models/inception --architecture=inception_v3 --output_graph=tf_files/SmartPhoneClass.pb --output_labels=tf_files/SmartPhoneClass.txt --image_dir=tf_files/DataSet/SmartPhoneClass

python -m scripts.retrain  --bottleneck_dir=tf_files/bottlenecks/FeaturePhoneClass  --how_many_training_steps 500 --model_dir=tf_files/models/inception --architecture=inception_v3 --output_graph=tf_files/FeaturePhoneClass.pb --output_labels=tf_files/FeaturePhoneClass.txt --image_dir=tf_files/DataSet/FeaturePhoneClass

TESTING:

// python -m scripts.label_image --input_height 299 --input_width 299 --input_layer "Mul" --graph=tf_files/retrained_graph.pb --image=validation/Test_1.png


python -m scripts.label_image --input_height 299 --input_width 299 --input_layer "Mul" --graph=tf_files/PhoneType.pb --image=validation/Test_1.png

python -m scripts.label_image --input_height 299 --input_width 299 --input_layer "Mul" --graph=tf_files/SmartPhoneClass.pb --image=validation/Test_1.png

python -m scripts.label_image --input_height 299 --input_width 299 --input_layer "Mul" --graph=tf_files/FeaturePhoneClass.pb --image=validation/Test_1.png



############################################################



There will be 3 ACCEPTABLE warnings (not errors) when training model and classifying an image.

Please use these versions. Other versions (especially Python 3.7 and Tensorflow 2)
will come up with more warnings when training the model and classifying an image.
	-> Python 3.6.2
	-> TensorFlow 1.3.0

On the command prompt, please type:
	-> pip install numpy==1.14.5
	-> pip install opencv-python

Train the model for the first time to build up the .pb files, bottlenecks, etc. on your computer.
This will take up to 10-20 minutes. After that, no need to train the model ever again.



############################################################



There will be 3 ACCEPTABLE warnings (not errors) when training model and classifying an image.

"Op BatchNormWithGlobalNormalization is deprecated. It will cease to work in GraphDef version 9. Use tf.nn.batch_normalization()."

Comments from GitHub:
"Oh, right, these are just warnings, and the GraphDef versioning mechanism is working fine in terms of not generating errors. Yep, it'd be good to retrain the model since the old ones will vanish eventually."
"The warnings are safe to ignore. We have to update the saved graph and checkpoint to not use these deprecated ops. I will leave this issue open to remind us we have to do that."
Source: https://github.com/tensorflow/tensorflow/issues/2164


"The TensorFlow library wasn't compiled to use AVX instructions, but these are available on your machine and could speed up CPU computations."
"The TensorFlow library wasn't compiled to use AVX2 instructions, but these are available on your machine and could speed up CPU computations."

Comment from GitHub:
"Those are simply warnings. They are just informing you if you build TensorFlow from source it can be faster on your machine. Those instructions are not enabled by default on the builds available I think to be compatible with more CPUs as possible."
Source: https://github.com/tensorflow/tensorflow/issues/7778



############################################################


