import 'dart:math';
import 'package:flutter/material.dart';
import 'package:just_audio/just_audio.dart';

void main() {
  runApp(const AlLamShamsiyaGameApp());
}

class AlLamShamsiyaGameApp extends StatelessWidget {
  const AlLamShamsiyaGameApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      title: 'لعبة اللام الشمسية',
      home: const Directionality(
        textDirection: TextDirection.rtl,
        child: GameScreen(),
      ),
      theme: ThemeData(primarySwatch: Colors.orange, fontFamily: 'Arial'),
    );
  }
}

class GameScreen extends StatefulWidget {
  const GameScreen({super.key});

  @override
  State<GameScreen> createState() => _GameScreenState();
}

class _GameScreenState extends State<GameScreen> {
  final Random _rnd = Random();
  final AudioPlayer _player = AudioPlayer();

  // كلمات اللعبة مع صورة وصوت
  final List<Map<String, String>> _words = [
      {
      'word': 'البحر',
      'image': 'assets/images/q2.jpg',
      'audio': 'assets/sounds/البحر.mp3',
    },
    {
      'word': 'البيت',
      'image': 'assets/images/q3.jpg',
      'audio': 'assets/sounds/البيت.mp3',
    },
    {
      'word': 'الدرس',
      'image': 'assets/images/a.jpg',
      'audio': 'assets/sounds/الدرس.mp3',
    },
    {
      'word': 'الذهب',
      'image': 'assets/images/b.jpg',
      'audio': 'assets/sounds/الذهب.mp3',
    },
    {
      'word': 'الزمرد',
      'image': 'assets/images/c.jpg',
      'audio': 'assets/sounds/الزمرد.mp3',
    },
    {
      'word': 'السرير',
      'image': 'assets/images/d.jpg',
      'audio': 'assets/sounds/السرير.mp3',
    },
    {
      'word': 'السماء',
      'image': 'assets/images/e.jpg',
      'audio': 'assets/sounds/السماء.mp3',
    },
    {
      'word': 'الشجرة',
      'image': 'assets/images/f.jpg',
      'audio': 'assets/sounds/الشجرة.mp3',
    },
    {
      'word': 'الشمس',
      'image': 'assets/images/g.png',
      'audio': 'assets/sounds/الشمس.mp3',
    },
    {
      'word': 'الشمعة',
      'image': 'assets/images/h.jpg',
      'audio': 'assets/sounds/الشمعة.mp3',
    },
    {
      'word': 'الصباح',
      'image': 'assets/images/e.jpg',
      'audio': 'assets/sounds/الصباح.mp3',
    },
    {
      'word': 'الضوء',
      'image': 'assets/images/j.jpg',
      'audio': 'assets/sounds/الضوء.mp3',
    },
    {
      'word': 'الطاولة',
      'image': 'assets/images/k.jpg',
      'audio': 'assets/sounds/الطاولة.mp3',
    },
    {
      'word': 'الظرف',
      'image': 'assets/images/l.jpg',
      'audio': 'assets/sounds/الظرف.mp3',
    },
    {
      'word': 'العشب',
      'image': 'assets/images/q4.jpg',
      'audio': 'assets/sounds/العشب.mp3',
    },
    {
      'word': 'اللسان',
      'image': 'assets/images/m.jpg',
      'audio': 'assets/sounds/اللسان.mp3',
    },
    {
      'word': 'اللغة',
      'image': 'assets/images/n.jpg',
      'audio': 'assets/sounds/اللغة.mp3',
    },
    
  
    {
      'word': 'الليل',
      'image': 'assets/images/w.jpeg',
      'audio': 'assets/sounds/الليل.mp3',
    },
      {
      'word': 'الماء',
      'image': 'assets/images/q5.jpg',
      'audio': 'assets/sounds/الماء.mp3',
    },
    {
      'word': 'النجم',
      'image': 'assets/images/y.png',
      'audio': 'assets/sounds/النجم.mp3',
    },
  ];

  final Set<String> _sunLetters = {
    'ت',
    'ث',
    'د',
    'ذ',
    'ر',
    'ز',
    'س',
    'ش',
    'ص',
    'ض',
    'ط',
    'ظ',
    'ل',
    'ن',
  };

  late Map<String, String> _currentItem;
  int _score = 0;
  int _total = 0;
  String? _lastResult;
  bool? _isCorrect;
  bool _firstWord = true; // لتجنب تشغيل الصوت للكلمة الأولى

  @override
  void initState() {
    super.initState();
    _pickWord();
  }

  void _pickWord() async {
    setState(() {
      _currentItem = _words[_rnd.nextInt(_words.length)];
      _lastResult = null;
      _isCorrect = null;
    });

    if (_firstWord) {
      _firstWord = false; // لا نشغل الصوت لأول كلمة
      return;
    }

    try {
      await _player.stop();
      await _player.setAsset(_currentItem['audio']!);
      await _player.play();
    } catch (e) {
      debugPrint("Error playing word audio: $e");
    }
  }

  bool _checkShamsiya(String word) {
    if (!word.startsWith('ال') || word.length < 3) return false;
    return _sunLetters.contains(word[2]);
  }

  void _answer(bool userSaysShamsiya) async {
    bool correct = _checkShamsiya(_currentItem['word']!) == userSaysShamsiya;

    setState(() {
      _total++;
      if (correct) {
        _score++;
        _lastResult = 'صح';
      } else {
        _lastResult = 'خطأ';
      }
      _isCorrect = correct;
    });

    try {
      await _player.stop();
      if (correct) {
        await _player.setAsset('assets/sounds/applause.mp3');
        await _player.play();
      } else {
        await _player.setAsset('assets/sounds/wrong.mp3');
        await _player.play();
      }
    } catch (e) {
      debugPrint("Error playing result sound: $e");
    }

    await Future.delayed(const Duration(milliseconds: 1200));
    _pickWord();
  }

  @override
  void dispose() {
    _player.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('لعبة اللام الشمسية', style: TextStyle(fontWeight: FontWeight.bold),),
        centerTitle: true,
      ),
      body: Padding(
        padding: const EdgeInsets.all(16.0),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.stretch,
          children: [
            Card(
              elevation: 4,
              shape: RoundedRectangleBorder(
                borderRadius: BorderRadius.circular(12),
              ),
              child: Padding(
                padding: const EdgeInsets.symmetric(
                  vertical: 20,
                  horizontal: 16,
                ),
                child: Column(
                  children: [
                    const Text(
                      'اضغط "لام شمسية" أو "ليست شمسية"',
                      style: TextStyle(fontSize: 16),
                    ),
                    const SizedBox(height: 12),
                    Image.asset(
                      _currentItem['image']!,
                      height: 160,
                      errorBuilder: (context, error, stackTrace) =>
                          const Icon(Icons.image, size: 100),
                    ),
                    const SizedBox(height: 12),
                    if (_isCorrect != null)
                      Icon(
                        _isCorrect! ? Icons.check_circle : Icons.cancel,
                        color: _isCorrect! ? Colors.green : Colors.red,
                        size: 60,
                      ),
                    const SizedBox(height: 12),
                    Text(
                      _currentItem['word']!,
                      style: const TextStyle(
                        fontSize: 48,
                        fontWeight: FontWeight.bold,
                      ),
                      textAlign: TextAlign.center,
                    ),
                    const SizedBox(height: 12),
                    if (_lastResult != null)
                      Text(_lastResult!, style: const TextStyle(fontSize: 18)),
                  ],
                ),
              ),
            ),
            const SizedBox(height: 16),
            Row(
              children: [
                Expanded(
                  child: ElevatedButton(
                    onPressed: () => _answer(true),
                    style: ElevatedButton.styleFrom(
                      padding: const EdgeInsets.symmetric(vertical: 14),
                    ),
                    child: const Text(
                      'لام شمسية',
                      style: TextStyle(fontSize: 18),
                    ),
                  ),
                ),
                const SizedBox(width: 12),
                Expanded(
                  child: OutlinedButton(
                    onPressed: () => _answer(false),
                    style: OutlinedButton.styleFrom(
                      padding: const EdgeInsets.symmetric(vertical: 14),
                    ),
                    child: const Text(
                      'ليست شمسية',
                      style: TextStyle(fontSize: 18),
                    ),
                  ),
                ),
              ],
            ),
            const SizedBox(height: 20),
            Card(
              
              child: Padding(
                padding: const EdgeInsets.all(12),
                child: Row(
                  mainAxisAlignment: MainAxisAlignment.spaceBetween,
                  children: [
                    Text(
                      'النتيجة: $_score / $_total',
                      style: const TextStyle(fontSize: 16),
                    ),
                    TextButton.icon(
                      onPressed: () {
                        setState(() {
                          _score = 0;
                          _total = 0;
                          _firstWord = true; // إعادة حالة الكلمة الأولى
                        });
                      },
                      icon: const Icon(Icons.refresh),
                      label: const Text('إعادة'),
                    ),
                  ],
                ),
              ),
            ),
          ],
        ),
      ),
    );
  }
}
